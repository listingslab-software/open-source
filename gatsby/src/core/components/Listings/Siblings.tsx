import * as React from 'react'
import {
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from "@mui/material"
import {
  Font,
  Icon,
  useAllMarkdown,
  useSiblings,
  navigate,
  usePwaDispatch,
  usePwaSelect,
  selectFrontmatter,
  // useParent,
} from "../../../core"

export default function Siblings(props: any) {
  const {
    descriptions,
    icons,
  } = props
  const frontmatter = usePwaSelect(selectFrontmatter)
  if(!frontmatter) return null
  const dispatch = usePwaDispatch()
  if (!frontmatter) return null
  const {
    slug,
    parentSlug,
  } = frontmatter
  const allMarkdown = useAllMarkdown()
  const siblings = useSiblings(slug, parentSlug ,allMarkdown)
  // const parent = useParent(parentSlug, allMarkdown)
  return <>

            {/* <pre>parentSlug: {JSON.stringify(parentSlug, null, 2)}</pre> */}
            <List dense>
                {parentSlug ? <ListItemButton
                  color="primary"
                  onClick={() => {
                  dispatch(navigate(parentSlug, "_self"))
                }}>
                  {icons ? <ListItemIcon>
                  <Icon icon={"left"} color="primary"/>
                </ListItemIcon> : null }
                {/* <ListItemText
                  primary={<Font variant={!descriptions ? "small" : ""}>
                              {title}
                            </Font> }
                  
                /> */}
              </ListItemButton> : null }
                

              

    {siblings.map((item: any, i: number) => {
      const {
        title,
        description,
        icon,
      } = item
      if (!title) return null
      return <ListItemButton
                color="primary"
                key={`childDoc_${i}`}
                onClick={() => {
                  dispatch(navigate(item.slug, "_self"))
                }}>
                  {icons ? <ListItemIcon>
                  <Icon icon={icon} color="primary"/>
                </ListItemIcon> : null }
                <ListItemText
                  primary={<Font variant={!descriptions ? "small" : ""}>
                              {title}
                            </Font> }
                  secondary={descriptions ? <Font variant="small">
                              {description}
                            </Font> : null }
                />
              </ListItemButton>
    })}
  </List>
  </>
  

}


/*

{flags && flag ? <ListItemAvatar>
                    <Avatar src={`/svg/flags/${flag || "eu"}.svg`} />
                  </ListItemAvatar> : null }
  <pre>{JSON.stringify(childDocs.length, null, 2)}</pre>
*/